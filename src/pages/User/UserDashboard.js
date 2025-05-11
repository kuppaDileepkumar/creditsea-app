import React, { useState, useMemo } from 'react';
import { ArrowUpDown, MoreHorizontal, Search, Filter, PlusCircle } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

const loans = [
  { loanOfficer: 'John Okoh', amount: 50000, dateApplied: 'June 09, 2021', status: 'PENDING' },
  { loanOfficer: 'John Okoh', amount: 100000, dateApplied: 'June 07, 2021', status: 'PENDING' },
  { loanOfficer: 'John Okoh', amount: 100000, dateApplied: 'June 07, 2021', status: 'REJECTED' },
  { loanOfficer: 'John Okoh', amount: 100000, dateApplied: 'May 27, 2021', status: 'APPROVED' },
];

const UserDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState(null);
  const [isLoanFormVisible, setLoanFormVisible] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedLoans = useMemo(() => {
    let filteredLoans = [...loans];

    if (searchQuery) {
      filteredLoans = filteredLoans.filter((loan) =>
        loan.loanOfficer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loan.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortConfig) {
      filteredLoans.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }

    return filteredLoans;
  }, [searchQuery, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'APPROVED':
        return 'green';
      case 'REJECTED':
        return 'red';
      case 'PENDING':
      default:
        return 'gray';
    }
  };

  const toggleLoanForm = () => {
    setLoanFormVisible(!isLoanFormVisible);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Applied Loans</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Search size={16} />
          <input
            type="text"
            placeholder="Search for loans..."
            value={searchQuery}
            onChange={handleSearch}
            style={{ padding: '6px 8px', fontSize: '14px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px' }}>
            <Filter size={16} />
            Filter
          </button>
          <button
            onClick={toggleLoanForm}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px' }}
          >
            <PlusCircle size={16} />
            Apply for Loan
          </button>
        </div>
      </div>

      {isLoanFormVisible && (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f4f4f4',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>Apply for a Loan</h3>
          <form>
            <ApplicationForm/>
          </form>
        </div>
      )}

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>
              <button
                onClick={() => requestSort('loanOfficer')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Loan Officer {sortConfig?.key === 'loanOfficer' && <ArrowUpDown size={12} />}
              </button>
            </th>
            <th style={{ padding: '10px', textAlign: 'left' }}>
              <button
                onClick={() => requestSort('amount')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Amount {sortConfig?.key === 'amount' && <ArrowUpDown size={12} />}
              </button>
            </th>
            <th style={{ padding: '10px', textAlign: 'left' }}>
              <button
                onClick={() => requestSort('dateApplied')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Date Applied {sortConfig?.key === 'dateApplied' && <ArrowUpDown size={12} />}
              </button>
            </th>
            <th style={{ padding: '10px' }}>Status</th>
            <th style={{ padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedLoans.map((loan, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '10px' }}>{loan.loanOfficer}</td>
              <td style={{ padding: '10px' }}>
                {loan.amount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'NGN',
                })}
              </td>
              <td style={{ padding: '10px' }}>{loan.dateApplied}</td>
              <td style={{ padding: '10px' }}>
                <span
                  style={{
                    padding: '4px 8px',
                    backgroundColor: getStatusColor(loan.status),
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '12px',
                  }}
                >
                  {loan.status}
                </span>
              </td>
              <td style={{ padding: '10px' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <MoreHorizontal size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>Rows per page: 7</p>
        <div>
          <button disabled style={{ marginRight: '10px' }}>&lt;</button>
          <span>1–4 of 4</span>
          <button disabled style={{ marginLeft: '10px' }}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
