#!/usr/bin/env groovy
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
        stage ("Build") {
            steps {
                ansiColor('xterm') {
                    sh "npm run package"
                }
            }
            post {
                success {
                    archiveArtifacts artifacts: 'client/vscode-yseopml-*.vsix', fingerprint: true
                }
            }
        }
    }

    post {
        always {
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