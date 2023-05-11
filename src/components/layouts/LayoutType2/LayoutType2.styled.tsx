import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-2 {
        width: 100vw;
        height: 100vh;
        background: ${theme.palette.common.white};
    }
    
    .main {
        
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    position: relative;

    height: calc(100% - 100px);
    width: calc(100% - 200px);

    z-index: 0;

    margin-left: 200px;    
`,
);
