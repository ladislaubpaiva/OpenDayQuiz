import { Option } from './styles';

export function QuizOption({
  img,
  topic,
  setQuiz,
  setTopic,
}: {
  img: string;
  topic: string;
  setQuiz: Function;
  setTopic: Function;
}) {
  return (
    <Option
      data-opt={topic}
      onClick={e => {
        const el = e.currentTarget.parentElement;
        const key = e.currentTarget.getAttribute('data-opt');
        if (el != null) {
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        }
        setQuiz();
        setTopic(topic);
      }}
    >
      <img src={img} alt="Quiz Image" title={topic} />
      <h2>{topic}</h2>
    </Option>
  );
}
100;
