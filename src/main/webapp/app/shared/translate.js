angular.module('eProposeApp').config(
    function ($translateProvider) {
        $translateProvider.translations('en', {
            name: 'Name',
            smoker: 'Smoking Status',
            gender: 'Gender',
            FOO: 'This is a paragraph.',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german',
            CUSTOMER: 'Customer',
            Pending: 'Pending Proposal',
            customerinfo: 'Customer Information',
            planinfo: 'Plan Information',
            plantype: 'Plan Type',
            plancode: 'Plan Code',
            age: 'Age',
            faceamount: 'Face Amount',
            error_surname: 'Your surname must be between 10 and 100 characters long and look like an e-mail address.',
            premium: 'Basic Annual Premium',
            riderform: 'Riders',
            insured: 'Insurer Information',
            policyholder: 'Policy Holder Information',
            fundactivity: 'Fund Activity',
            summary: 'Summary',
            rider: 'Supplementary Benefit',
            product: 'Product Group',
            basicsinglepremium: 'Basic Single Premium',
            deathbenefitoption: 'Death Benefit',
            DB1: 'Face Plus',
            

        });
        $translateProvider.translations('de', {
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    })