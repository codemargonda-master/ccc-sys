import React, {Component} from 'react';
import './style.css';

const schedule = [
  {
    level: "Beginner",
    test: "20 Jan 2017",
    start: "20 Jan 2017",
    end: "20 Jan 2017",
    status: "Tutup"
  }, {
    level: "Beginner",
    test: "20 Jan 2017",
    start: "20 Jan 2017",
    end: "20 Jan 2017",
    status: "Tutup"
  }, {
    level: "Beginner",
    test: "20 Jan 2017",
    start: "20 Jan 2017",
    end: "20 Jan 2017",
    status: "Tutup"
  }, {
    level: "Beginner",
    test: "20 Jan 2017",
    start: "20 Jan 2017",
    end: "20 Jan 2017",
    status: "Tutup"
  }, {
    level: "Beginner",
    test: "20 Jan 2017",
    start: "20 Jan 2017",
    end: "20 Jan 2017",
    status: "Tutup"
  }, {
    level: "Beginner",
    test: "20 Jan 2017",
    start: "20 Jan 2017",
    end: "20 Jan 2017",
    status: "Tutup"
  }
];

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <div className="schedule-title">Jadwal Kursus</div>
        <div className="schedule-table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th id="schedule-th">Kelas</th>
                <th id="schedule-th">Tes</th>
                <th id="schedule-th">Awal Kelas</th>
                <th id="schedule-th">Akhir Kelas</th>
                <th id="schedule-th">Status</th>
              </tr>
            </thead>
            <tbody>

              {schedule.map(function(sc,index){
                return(
                  <tr key={index}>
                    <td>{sc.level}</td>
                    <td>{sc.test}</td>
                    <td>{sc.start}</td>
                    <td>{sc.end}</td>
                    <td>{sc.status}</td>
                  </tr>
                );
              })
            }

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Schedule;
