// index.tsx
import styles from './index.module.scss';
import Worker from './example.js?worker';
export function Header() {
  const worker = new Worker();
  // 2. 主线程监听 worker 的信息
  worker.addEventListener('message', (e) => {
    console.log(e);
  });
  return (
    <p className={styles.header}>
      This is Header
      <span className="bg-red-400">xxx</span>
    </p>
  );
}
