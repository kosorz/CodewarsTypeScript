// Removing all spaces from string

const noSpace = (x:string):string => {
  return x.split('').filter(el => el !== ' ').join('');
}
