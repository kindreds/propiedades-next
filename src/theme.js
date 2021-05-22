import React from 'react';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const Button = {
  baseStyle: {
    fontWeight: 'light',
  },
};

const fonts = {
  mono: `'Menlo', monospace`,
  body: 'Montserrat',
  heading: 'Montserrat',
};

const breakpoints = createBreakpoints({
  ms: '34.375em',
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  config,
  colors: {
    black: '#16161D',
  },
  fonts,
  components: {
    Button,
  },
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="73"
          viewBox="0 0 203 73"
          fill="none"
        >
          <path
            d="M27.5592 13.2017V12.9917C27.5592 9.53267 26.4584 6.65543 24.3745 4.66866C22.0133 2.42357 18.4862 1.23278 14.1525 1.23278H0V37.0408H8.02471V25.3722H12.6253L19.4925 37.0408H28.6831L20.7004 23.7698C23.8704 22.3962 27.5592 19.4497 27.5592 13.2017ZM19.4799 13.3529V13.4033C19.4799 16.6481 17.2678 18.5844 13.5664 18.5844H8.02471V8.17175H13.4067C17.3813 8.17175 19.482 9.9632 19.482 13.3529H19.4799ZM140.861 1.03116L127.391 37.0408H135.496L138.21 29.3289H150.814L153.583 37.0408H161.895L148.424 1.03116H140.861ZM148.369 22.5432H140.651L144.529 11.5803L148.369 22.5432ZM185.329 18.7314L196.063 1.23278H187.135L180.787 12.5737L174.544 1.23278H165.404L176.039 18.8322L164.931 37.0408H173.859L180.634 25.0278L187.356 37.0408H196.498L185.329 18.7314ZM44.0813 30.1018V22.4718H58.4523V15.5413H44.0813V8.17175H60.4227V1.24118H36.1112V37.0492H51.1943L54.8579 30.1186L44.0813 30.1018ZM112.863 1.23278L104.754 12.8362L96.5423 1.23278H96.4499L88.2088 16.8392V37.0408H96.0213V14.8692L104.464 25.8573L104.508 25.9308H104.846L113.386 14.7684V37.0408H121.251V1.23278H112.863Z"
            fill="#DC1C2E"
          />
          <path
            d="M78.3313 1.23279L59.4228 37.0408H69.1701L88.0807 1.23279H78.3313Z"
            fill="#003DA5"
          />
          <path
            d="M200.355 7.1156e-06C200.702 -0.00249347 201.047 0.0638429 201.368 0.195179C201.689 0.326515 201.981 0.520243 202.227 0.765158C202.473 1.01007 202.668 1.30131 202.801 1.62203C202.933 1.94275 203.001 2.28658 203 2.63363C203.005 3.1613 202.854 3.67868 202.564 4.11998C202.275 4.56128 201.861 4.90658 201.375 5.11199C200.888 5.31739 200.352 5.37363 199.834 5.27355C199.316 5.17347 198.839 4.9216 198.464 4.54994C198.089 4.17828 197.834 3.70362 197.729 3.1863C197.625 2.66899 197.677 2.13237 197.879 1.64467C198.08 1.15696 198.422 0.740199 198.861 0.447348C199.301 0.154497 199.817 -0.00121462 200.345 7.1156e-06H200.355ZM200.345 0.420042C199.765 0.430539 199.212 0.670504 198.809 1.08737C198.405 1.50424 198.183 2.06403 198.191 2.64413C198.182 2.93317 198.231 3.22111 198.336 3.49085C198.44 3.76059 198.597 4.00664 198.799 4.21438C199 4.42213 199.241 4.58735 199.507 4.70022C199.773 4.8131 200.06 4.87134 200.349 4.87148C200.638 4.87162 200.925 4.81366 201.191 4.70104C201.457 4.58843 201.698 4.42345 201.9 4.21589C202.101 4.00834 202.259 3.76245 202.364 3.49281C202.468 3.22317 202.517 2.93528 202.508 2.64623C202.513 2.35866 202.462 2.07293 202.356 1.80537C202.251 1.5378 202.093 1.29367 201.893 1.08691C201.693 0.880153 201.455 0.714834 201.191 0.600407C200.927 0.485981 200.643 0.424691 200.355 0.420042H200.345ZM199.841 4.17726H199.357V1.23701C199.635 1.19083 199.916 1.16695 200.198 1.1656C200.525 1.14329 200.851 1.22093 201.133 1.38822C201.226 1.45812 201.3 1.55038 201.348 1.65646C201.396 1.76254 201.417 1.87904 201.408 1.99517C201.406 2.16139 201.347 2.32198 201.242 2.45059C201.136 2.57919 200.99 2.66817 200.828 2.70293V2.73024C201.093 2.77644 201.271 3.00956 201.33 3.44429C201.355 3.69509 201.419 3.94035 201.521 4.17096H201.019C200.904 3.93593 200.833 3.68183 200.809 3.42119C200.738 3.04736 200.546 2.90665 200.164 2.90665H199.828L199.841 4.17726ZM199.841 2.54962H200.198C200.595 2.54962 200.929 2.40891 200.929 2.04768C200.929 1.78936 200.738 1.53104 200.198 1.53104C200.082 1.53086 199.966 1.53858 199.851 1.55414L199.841 2.54962Z"
            fill="#BC2130"
          />
          <path
            d="M106.813 49.0538H116.896C122.841 49.0538 126.671 52.1096 126.671 57.3159V57.3831C126.671 62.9254 122.404 65.8468 116.56 65.8468H113.329V72.5673H106.817L106.813 49.0538ZM116.421 60.7413C118.732 60.7413 120.15 59.5316 120.15 57.6855V57.6183C120.15 55.6042 118.738 54.529 116.388 54.529H113.329V60.7413H116.421Z"
            fill="#1A3668"
          />
          <path
            d="M129.421 49.0538H148.327V54.6046H135.87V58.1748H147.157V63.314H135.87V67.0418H148.501V72.5841H129.421V49.0538Z"
            fill="#1A3668"
          />
          <path
            d="M151.829 49.0538H162.948C166.542 49.0538 169.027 49.9947 170.607 51.6055C171.985 52.9496 172.689 54.7558 172.689 57.0807V57.1479C172.689 60.7413 170.773 63.125 167.857 64.3683L173.468 72.5589H165.937L161.2 65.4393H158.345V72.5589H151.833L151.829 49.0538ZM162.645 60.338C164.862 60.338 166.139 59.2627 166.139 57.5511V57.4839C166.139 55.6378 164.794 54.697 162.612 54.697H158.345V60.338H162.645Z"
            fill="#1A3668"
          />
          <path
            d="M175.68 62.2534V49.0538H182.297V62.119C182.297 65.5108 184.012 67.1237 186.631 67.1237C189.251 67.1237 190.965 65.578 190.965 62.2933V49.0622H197.582V62.0833C197.582 69.6733 193.248 73.0042 186.564 73.0042C179.88 73.0042 175.68 69.6082 175.68 62.2534ZM187.738 42.0035L193.818 43.8517L188.854 47.443H184.11L187.738 42.0035Z"
            fill="#1A3668"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
});

export default theme;
