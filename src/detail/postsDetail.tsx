import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './postsDetail.module.css';

// 投稿の詳細データの型を定義
interface PostDetail {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  thumbnailUrl: string;
  categories: string[];
}

export const PostsDetail: React.FC = () => {
  // useParamsからidを取得する際の型を指定
  const { id } = useParams<{ id: string }>(); // URLのidパラメータはstring型で受け取る

  const [detailPost, setPost] = useState<PostDetail | null>(null); // 初期値はnullでPostDetail型に指定
  const [isLoading, setIsLoading] = useState<boolean>(true); // 読み込み中の状態を管理

  // APIで投稿詳細を取得する処理
  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true); // 読み込み開始時にisLoadingをtrueに設定

      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        const data = await res.json();
        setPost(data.post);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      } finally {
        setIsLoading(false); // 読み込み完了後にisLoadingをfalseに設定
      }
    };

    fetcher();
  }, [id]); // idが変更された場合に再取得

  if (isLoading) {
    return <div>・・・読み込み中です・・・</div>;
  }

  if (!detailPost) {
    return <div>投稿が見つかりませんでした。</div>;
  }

  return (
    <div className={styles.detail_container}>
      <img className={styles.detail_thumbnail} src={detailPost.thumbnailUrl} alt={detailPost.title} />
      <div className={styles.detail_detail}>
        <div className={styles.detail_info}>
          <p className={styles.detail_date}>{new Date(detailPost.createdAt).toLocaleDateString()}</p>
          <ul className={styles.detail_cate}>
            {detailPost.categories.map((cate, index) => (
              <li className={styles.detail_item} key={index}>{cate}</li>
            ))}
          </ul>
        </div>
        <h2 className={styles.detail_title}>{detailPost.title}</h2>
        <div className={styles.detail_text} dangerouslySetInnerHTML={{ __html: detailPost.content }} />
      </div>
    </div>
  );
};
