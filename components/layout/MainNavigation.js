import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>To-Dos</div>
      <Link href='/'>Home</Link>
      <Link href='/completed-tasks'>Completed ToDos</Link>
    </header>
  );
}

export default MainNavigation;