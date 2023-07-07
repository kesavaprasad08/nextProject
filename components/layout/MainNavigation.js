import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>To-Dos</div>
      
    </header>
  );
}

export default MainNavigation;