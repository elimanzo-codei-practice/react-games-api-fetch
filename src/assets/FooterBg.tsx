import { useTheme } from '@mui/material';


export default function FooterBg() {
  const primaryColor = useTheme().palette.primary.main;

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill={primaryColor}
        fillOpacity='0.4'
        d='M0,160L48,160C96,160,192,160,288,133.3C384,107,480,53,576,37.3C672,21,768,43,864,80C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      />
    </svg>
  );
}
