import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const MissionsElements = missions.map(
      ({ name, year, country, destination }) => (
        <MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      ),
    );
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { MissionsElements }
      </div>
    );
  }
}

export default Missions;
