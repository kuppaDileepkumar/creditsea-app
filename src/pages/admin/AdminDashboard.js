import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <main className="main-content">
        {/* Top bar removed */}

        <section className="cards">
          {[
            { label: 'ACTIVE USERS', value: '200' },
            { label: 'BORROWERS', value: '100' },
            { label: 'CASH DISBURSED', value: '550,000' },
            { label: 'CASH RECEIVED', value: '1,000,000' },
            { label: 'SAVINGS', value: '450,000' },
            { label: 'REPAID LOANS', value: '30' },
            { label: 'OTHER ACCOUNTS', value: '10' },
            { label: 'LOANS', value: '50' },
          ].map((card, index) => (
            <div className="card" key={index}>
              <h3>{card.value}</h3>
              <p>{card.label}</p>
            </div>
          ))}
        </section>

        <section className="recent-loans">
          <h3>Recent Loans</h3>
          <table>
            <thead>
              <tr>
                <th>User details</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Contact Email not Linked', 'Tom Cruise', 'June 09, 2021', 'PENDING'],
                ['Adding Images to Featured Posts', 'Matt Damon', 'June 09, 2021', 'PENDING'],
                ['When will I be charged this month?', 'Robert Downey', 'June 08, 2021', 'PENDING'],
                ['Payment not going through', 'Christian Bale', 'June 08, 2021', 'PENDING'],
                ['Unable to add replies', 'Henry Cavill', 'June 08, 2021', 'APPROVED'],
                ['Downtime since last week', 'Chris Evans', 'June 08, 2021', 'APPROVED'],
                ['Referral Bonus', 'Sam Smith', 'June 08, 2021', 'PENDING'],
              ].map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td><span className={`status ${row[3].toLowerCase()}`}>{row[3]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="charts">
          <div className="charts-section">
            {/* Loans Released - Line Chart */}
            <div className="chart-card">
              <h3>Loans Released Monthly</h3>
              <div className="line-chart">
                <div className="line">
                  {[500, 300, 150, 600, 100, 250, 200, 0, 100, 500, 200, 800].map((val, i) => (
                    <div key={i} className="dot" style={{ bottom: `${val / 10}px`, left: `${i * 8}%` }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Open Loans - Bar Chart */}
            <div className="chart-card">
              <h3>Total Outstanding Open Loans - Monthly</h3>
              <div className="bar-chart blue">
                {[100, 250, 400, 900, 100, 450, 250, 900, 600, 100, 400, 350].map((val, i) => (
                  <div key={i} className="bar" style={{ height: `${val / 1.5}px` }}></div>
                ))}
              </div>
            </div>

            {/* Recovery Rates */}
            <div className="recovery-row">
              <div className="recovery-card orange">
                <div className="text">
                  <h4>Rate of Recovery (Open, Fully Paid, Default Loans)</h4>
                  <p>Percentage of the due amount that is paid for all loans until today</p>
                  <span className="percent">45%</span>
                </div>
              </div>
              <div className="recovery-card green">
                <div className="text">
                  <h4>Rate of Recovery (Open Loans)</h4>
                  <p>Percentage of the due amount that is paid for open loans until today</p>
                  <span className="percent">35%</span>
                </div>
              </div>
            </div>

            {/* Repayments Collected */}
            <div className="chart-card">
              <h3>Number of Repayments Collected - Monthly</h3>
              <div className="bar-chart red">
                {[1, 5, 6, 9, 2, 5, 3, 9, 6, 2, 5, 4].map((val, i) => (
                  <div key={i} className="bar" style={{ height: `${val * 12}px` }}></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
