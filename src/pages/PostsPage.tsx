import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchPosts, setSearchTerm, setCurrentPage, setPageSize } from '../store/postsSlice';
import DataTable from '../components/DataTable';
import { Post } from '../store/postsSlice';

const columns = [
  { key: 'id', label: '#' },
  { key: 'userId', label: 'User ID' },
  { key: 'title', label: 'Title' },
  { key: 'body', label: 'Body' },
];

const PostsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error, searchTerm, currentPage, pageSize } = useAppSelector((s) => s.posts);

  useEffect(() => {
    if (data.length === 0) dispatch(fetchPosts());
  }, [dispatch, data.length]);

  const filtered = data.filter((p) =>
    [p.title, p.body].join(' ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginated = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div style={{ paddingTop: 8 }}>
      <DataTable<Post>
        title="Posts"
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

export default PostsPage;
