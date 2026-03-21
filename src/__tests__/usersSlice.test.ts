import usersReducer, {
  setSearchTerm,
  setCurrentPage,
  setPageSize,
} from '../store/usersSlice';

describe('usersSlice', () => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
    searchTerm: '',
    currentPage: 1,
    pageSize: 5,
  };

  it('should return the initial state', () => {
    expect(usersReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle setSearchTerm', () => {
    const state = usersReducer(initialState, setSearchTerm('alice'));
    expect(state.searchTerm).toBe('alice');
    expect(state.currentPage).toBe(1);
  });

  it('should reset page to 1 when search term changes', () => {
    const withPage = { ...initialState, currentPage: 3 };
    const state = usersReducer(withPage, setSearchTerm('bob'));
    expect(state.currentPage).toBe(1);
  });

  it('should handle setCurrentPage', () => {
    const state = usersReducer(initialState, setCurrentPage(4));
    expect(state.currentPage).toBe(4);
  });

  it('should handle setPageSize and reset page', () => {
    const withPage = { ...initialState, currentPage: 3 };
    const state = usersReducer(withPage, setPageSize(10));
    expect(state.pageSize).toBe(10);
    expect(state.currentPage).toBe(1);
  });
});
