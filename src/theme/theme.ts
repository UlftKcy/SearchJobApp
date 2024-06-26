type ThemeTypes = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification:string;
  };
};

export const theme:ThemeTypes = {
  dark: false,
  colors: {
    primary: '#4966F7',
    background: '#ffff',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
