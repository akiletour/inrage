import style from './Character.module.css';

export default function Character() {
  return (
    <div>
      <div className={style.newcharacter404}>
        <div className={style.words}>
          <div className={style.word}>&lt;?php</div>
          <div className={style.word}>&lt;div&gt;</div>
        </div>
        <div className={style.words}>
          <div className={style['word-right']}>&lt;html&gt;</div>
          <div className={style['word-right']}>body{}</div>
        </div>
        <div className={style.chair404}></div>
        <div className={style.leftshoe404}></div>
        <div className={style.rightshoe404}></div>
        <div className={style.legs404}></div>
        <div className={style.torso404}>
          <div className={style.body404}></div>
          <div className={style.leftarm404}></div>
          <div className={style.rightarm404}></div>
          <div className={style.head404}>
            <div className={style.eyes404}></div>
          </div>
        </div>
        <div className={style.laptop404}></div>
      </div>
    </div>
  );
}
