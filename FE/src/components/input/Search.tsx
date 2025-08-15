import React from 'react';
import { Input } from 'antd';

const SearchInput: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => (
    <Input.Search 
        placeholder="Cari berita..." 
        variant="filled" 
        onSearch={onSearch} 
        allowClear
        className="w-full sm:w-[300px] md:w-[400px]"
    />
);

export default SearchInput;
