import Table from 'react-bootstrap/Table';
import { shallowEqual, useSelector } from 'react-redux';

const MyMissions = () => {
  const myMissions = useSelector((state) => state.missions, shallowEqual)
    .filter(({ status }) => status === 'Active member');

  return (
    <div className="my-missions">
      <h2 className="mb-4">My Missions</h2>
      <Table bordered hover size="sm" responsive className="my-items">
        <tbody>
          {myMissions.map(({ id, name }) => (
            <tr key={id}>
              <td><p className="p-3">{name}</p></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyMissions;
