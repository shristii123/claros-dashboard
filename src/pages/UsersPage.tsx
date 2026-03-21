import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchUsers, setSearchTerm, setCurrentPage, setPageSize } from '../store/usersSlice';
import DataTable from '../components/DataTable';
import { User } from '../store/usersSlice';

const columns = [
  { key: 'id', label: '#' },
  { key: 'name', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'address.city', label: 'City' },
  { key: 'company.name', label: 'Company' },
  {
    key: 'website',
    label: 'Website',
    render: (u: User) => (
      <a href={`https://${u.website}`} target="_blank" rel="noreferrer"
        style={{ color: 'var(--accent)', textDecoration: 'none' }}>
        {u.website}
      </a>
    ),
  },
];

const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error, searchTerm, currentPage, pageSize } = useAppSelector((s) => s.users);

  useEffect(() => {
    if (data.length === 0) dispatch(fetchUsers());
  }, [dispatch, data.length]);

  const filtered = data.filter((u) =>
    [u.name, u.username, u.email, u.address.city, u.company.name]
      .join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div style={{ paddingTop: 8 }}>
      <DataTable<User>
        title="Users"
        columns={columns}
        data={paginated}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        onSearchChange={(v) => dispatch(setSearchTerm(v))}
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={filtered.length}
        onPageChange={(p) => dispatch(setCurrentPage(p))}
        onPageSizeChange={(s) => dispatch(setPageSize(s))}
      />
    </div>
  );
};

export default UsersPage;
