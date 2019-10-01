import { NotificationHandler0 } from 'vscode-languageserver-protocol';

import Session from '../session';

export default function(session: Session): NotificationHandler0 {
    return () => {
        session.dispose();
    };
}
