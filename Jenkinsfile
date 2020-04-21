#!/usr/bin/env groovy
@Library('Utilities') _

pipeline {
    agent {
        node {
            label 'vscode'
        }
    }

    options {
        disableConcurrentBuilds()
        timeout(time: 10, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '10'))
    }


    environment {
        SLACK_NOTIFY            = sh (script: 'git --no-pager show -s --format=\'%ae\'  | cut -d \'@\' -f1', returnStdout: true).trim()
    }

    stages {
        stage ("Install dependencies") {
            steps {
                ansiColor('xterm') {
                    sh "npm ci --unsafe-perm"
                }
            }
        }

        stage ("Compile") {
            steps {
                ansiColor('xterm') {
                    sh "npm run compile"
                }
            }
        }

        stage ("Test") {
            steps {
                ansiColor('xterm') {
                    sh "npm run test:ci"
                    sh "npm run test:client"
                }
            }
        }

        stage ("Package") {
            steps {
                ansiColor('xterm') {
                    sh "npm run package"
                }
            }
            post {
                success {
                    archiveArtifacts artifacts: 'vscode-yseopml-*.vsix', fingerprint: true
                }
            }
        }

        stage('SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'sonarqube'
                    def sonarArgs = utils.constructSonarArgs(['develop', 'master'], 'develop')

                    withSonarQubeEnv('sonarcloud') {
                        sh "${scannerHome}/bin/sonar-scanner ${sonarArgs}"
                    }
                }
            }
        }

        stage('Sonar Quality Gate') {
            when {
                anyOf {
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    // Parameter indicates whether to set pipeline to FAILED if Quality Gate fails
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }

    post {
        always {
            // xunit reports
            xunit(
                thresholdMode: 1, // 1 for number, 1 for percent
                testTimeMargin: "3000",
                thresholds: [ skipped(failureThreshold: "10"), failed(failureThreshold: "10") ],
                tools: [
                    JUnit(pattern: "target/test-reports/*-tests.xml")
                ]
            )

            // clean up our workspace
            cleanWs deleteDirs: true
            deleteDir()
        }
        success {
            slackSend (color: 'good', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}) <@${SLACK_NOTIFY}>")
        }
        failure {
            slackSend (color: 'danger', message: "FAILED: Stage '${env.LAST_STAGE_NAME}' Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}) <@${SLACK_NOTIFY}>")
        }
    }
}
