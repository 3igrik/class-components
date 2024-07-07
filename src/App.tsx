import { Component, ReactNode } from 'react';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Search from './components/search/Search';
import Results from './components/results/Results';
import './App.css';
import ErrorButton from './components/error-button/ErrorButton';
import Loader from './components/loader/Loader';
import { CharacterDto } from './components/results/character.interface.dto';

class App extends Component<
  unknown,
  { error: null | ReactNode; isLoading: boolean; results: unknown[] }
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      results: [],
      error: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchResults(localStorage.getItem('searchTerm') || '');
  }

  fetchResults = (term: string | undefined) => {
    this.setState({ isLoading: true, error: null });

    const apiGetEndpoint = `https://stapi.co/api/v1/rest/character/search?pageNumber=1&pageSize=10`;

    const apiPostEndpoint = `https://stapi.co/api/v1/rest/character/search`;

    term = undefined;

    console.log('TERRMM:', term);

    if (term) {
      const queryParams = new URLSearchParams({
        pageNumber: '0',
        pageSize: '10',
      }).toString();
      const urlWithParams = `${apiPostEndpoint}?${queryParams}`;
      const payload = {
        name: term,
      };

      fetch(urlWithParams, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => this.setState({ results: data.characters, isLoading: false }))
        .catch((error) => {
          console.error('Error fetching data: ', error);
          this.setState({ error: error.message, isLoading: false });
        });
    } else {
      fetch(apiGetEndpoint)
        .then((response) => response.json())
        .then((data) => this.setState({ results: data.characters, isLoading: false }))
        .catch((error) => {
          console.error('Error fetching data: ', error);
          this.setState({ error: error.message, isLoading: false });
        });
    }
  };

  handleSearch = (term: string) => {
    this.fetchResults(term);
  };

  render() {
    const { error, isLoading, results } = this.state;

    if (error) {
      return <h1>Error: {error}</h1>;
    }

    return (
      <ErrorBoundary>
        <div className="container">
          <div className="search-container">
            <Search onSearch={this.handleSearch} />
          </div>
          <div className="results-container">
            {isLoading ? <Loader /> : <Results results={results as CharacterDto[]} />}
          </div>
          <div className="error-btn-container">
            <ErrorButton />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
