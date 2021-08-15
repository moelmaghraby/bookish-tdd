
import './App.css';
import { Typography } from '@material-ui/core';
import { Route } from 'react-router';
import BookDetailsContainer from './BookDetails/BookDetailsContainer';
import BookListContainer from './BookList/BooklistContainer';

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading"> Bookish</Typography>
      <Route path="/" component={BookListContainer} exact={true}></Route>
      <Route path="/books/:id" component={BookDetailsContainer}></Route>
    </div>
  );
}

export default App;
