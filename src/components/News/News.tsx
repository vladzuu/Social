import { Newspaper } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { news } from '../../api/api';

interface NewsProps {
  prop: string;
}

const News = (props: NewsProps) => {
  let [news1, setNews] = useState()

  useEffect(() => {
    news.getNews().then((data) => console.log(data))
  })

  const { prop } = props;

  return (
    <div>

    </div>
  );
};

export default News;
