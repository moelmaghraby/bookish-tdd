
import './App.css';
import { Typography } from '@material-ui/core';
import BookListContainer from './BooklistContainer';
import { Route } from 'react-router';
import BookDetailContainer from './BookDetailsContainer';

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading"> Bookish</Typography>
      <Route path="/" component={BookListContainer} exact={true}></Route>
      <Route path="/books/:id" component={BookDetailContainer}></Route>
    </div>
  );
}

export default App;
