import { Table } from 'react-bootstrap';
import { useSelector, shallowEqual } from 'react-redux';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets, shallowEqual);

  return (
    <div className="my-missions">
      <h2 className="mb-4">My Rockets</h2>
      <Table bordered hover size="sm" responsive>
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
