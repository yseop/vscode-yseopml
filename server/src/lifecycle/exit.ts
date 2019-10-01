import { NotificationHandler0 } from 'vscode-languageserver-protocol';

import Session from '../session';

export default function(_: Session): NotificationHandler0 {
    return () => {
        // Does nothing
    };
}
