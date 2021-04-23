import { createGlobalStyle } from 'styled-components';

import PoppinsFont from './Poppins.woff';
import PoppinsFont2 from './Poppins.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsFont2}) format('woff2'),
        url(${PoppinsFont}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;