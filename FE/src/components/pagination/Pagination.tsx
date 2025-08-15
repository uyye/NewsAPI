import { Pagination } from 'antd';
import type { PagesProps } from '../../type';

const Pages = ({ currentPage, pageSize, totalResults, setPage }: PagesProps) => 
<Pagination 
current={currentPage}
pageSize={pageSize}
total={totalResults}
onChange={setPage}
/>;

export default Pages;