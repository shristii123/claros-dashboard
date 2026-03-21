import postsReducer, {
  setSearchTerm,
  setCurrentPage,
  setPageSize,
} from '../store/postsSlice';

describe('postsSlice', () => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
    searchTerm: '',
    currentPage: 1,
    pageSize: 5,
  };

  it('should return the initial state', () => {
    expect(postsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle setSearchTerm', () => {
    const state = postsReducer(initialState, setSearchTerm('react'));
    expect(state.searchTerm).toBe('react');
    expect(state.currentPage).toBe(1);
  });

  it('should reset page to 1 when search term changes', () => {
    const withPage = { ...initialState, currentPage: 5 };
    const state = postsReducer(withPage, setSearchTerm('redux'));
    expect(state.currentPage).toBe(1);
  });

  it('should handle setCurrentPage', () => {
    const state = postsReducer(initialState, setCurrentPage(2));
    expect(state.currentPage).toBe(2);
  });

  it('should handle setPageSize and reset page', () => {
    const withPage = { ...initialState, currentPage: 4 };
    const state = postsReducer(withPage, setPageSize(20));
    expect(state.pageSize).toBe(20);
    expect(state.currentPage).toBe(1);
  });
});
