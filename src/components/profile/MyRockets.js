import { Table } from 'react-bootstrap';
import { useSelector, shallowEqual } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets, shallowEqual);

  return (
    <div className="my-rockets">
      <h2 className="mb-4">My Rockets</h2>
      <Table hover bordered size="sm" responsive className="my-items">
        <tbody>
          {
            rockets.filter(({ reserved }) => reserved).map(({ name, id }) => (
              <>
                <tr key={id}>
                  <td><p className="p-3">{name}</p></td>
                </tr>
              </>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default MyRockets;
