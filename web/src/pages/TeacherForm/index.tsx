import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [personal, setPersonal] = useState({
    name: '', avatar: '', whatsapp: '', bio: ''
  });

  const [lesson, setLesson] = useState({
    subject: '', cost: ''
  });

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, 
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(newArray);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name: personal.name,
      avatar: personal.avatar,
      whatsapp: personal.whatsapp,
      bio: personal.bio,
      subject: lesson.subject,
      cost: Number(lesson.cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição." 
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              label="Nome completo"
              value={personal.name}
              onChange={e => setPersonal({ ...personal, name: e.target.value })} 
            />
            <Input 
              name="avatar" 
              label="Avatar" 
              value={personal.avatar}
              onChange={e => setPersonal({ ...personal, avatar: e.target.value })} 
            />
            <Input 
              name="whatsapp" 
              label="WhatsApp" 
              value={personal.whatsapp}
              onChange={e => setPersonal({ ...personal, whatsapp: e.target.value })}  
            />
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={personal.bio}
              onChange={e => setPersonal({ ...personal, bio: e.target.value })} 
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              name="subject" 
              label="Matéria"
              value={lesson.subject}
              onChange={e => setLesson({ ...lesson, subject: e.target.value })} 
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Química', label: 'Química' },
                { value: 'Filosofia', label: 'Filosofia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
              ]} 
            />

            <Input 
              name="cost" 
              label="Custo da sua aula por hora" 
              value={lesson.cost}
              onChange={e => setLesson({ ...lesson, cost: e.target.value })} 
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}> 
                + Novo horário
              </button>  
            </legend>
            
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]} 
                  />
                  <Input 
                    value={scheduleItem.from}
                    name="from" 
                    label="Das" 
                    type="time" 
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    value={scheduleItem.to}
                    name="to" 
                    label="Até" 
                    type="time" 
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;