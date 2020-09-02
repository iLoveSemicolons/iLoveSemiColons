import React, {Fragment} from 'react';
import {IntlProvider} from "react-intl";
import {locales} from './locales'
import messages from './messages'



const Provider = ({children, locale = locales.ENGLISH}) => (
    <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
    >
        {children}
    </IntlProvider>
)

export default Provider;