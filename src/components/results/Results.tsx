import { Component } from 'react';
import { CharacterDto } from './character.interface.dto';

class Results extends Component<{ results: CharacterDto[] }> {
  render() {
    const results = this.props.results || [];

    return (
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <h2>{result.name}</h2>
            <p>{result.yearOfBirth}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
