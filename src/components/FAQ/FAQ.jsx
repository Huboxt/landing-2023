import React, { useState } from "react";
import Image from "next/image";
import minus from '../../assets/img/minus.svg';
import plus from '../../assets/img/plus.svg';
import { questions } from './questions';
import style from './FAQ.module.css';

const FAQ = () => {
  const [showId, setShowId] = useState('');

  const handleShowId = (id) => {
    if(showId === id){
      setShowId('');
    } else{
      setShowId(id);
    }
  }
  return(
    <div className={style.faqWrapper}>
      <div className={style.faqContainer}>
        <div className={style.title}>FAQ</div>
        <div className={style.questionsWrapper}>
          {
            questions.map((e, i) => {
              const isShow = !!(showId === e.id)
              return(
                <div key={e.id} className={style.questions}>
                  <div className={style.titleWrapper}>
                    <div className={style.numberWrapper}>
                      <div className={style.numberQuestion}>{i + 1 > 9 ? i + 1 : `0${i+1}`}</div>
                      <div>
                      <div className={style.questionTitle}>
                        {e.title}
                      </div>
                      <div className={isShow ? style.description : style.descriptionHidden}>
                      {e.description}
                      </div>
                      </div>
                    </div>
                    <div className={style.increaseButton}>
                      <Image onClick={() => handleShowId(e.id)} src={isShow ? minus : plus} alt=" "/>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default FAQ;