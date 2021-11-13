import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-southeast-2_inKOwvEiS',
    ClientId: '10iqk0i6jrsu4bg45pv04akvi6',
};

export default new CognitoUserPool(poolData);
