import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { HeaderButton } from '@vkontakte/vkui';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { Checkbox } from '@vkontakte/vkui';

class Quest extends React.Component {
	constructor(props) {
		super(props);
		this.propTypes = {
			id: PropTypes.string.isRequired,
			go: PropTypes.func.isRequired,
			fetchedUser: PropTypes.shape({
				photo_200: PropTypes.string,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				city: PropTypes.shape({
					title: PropTypes.string,
				}),
			}),
		};
	}
	  
	componentDidMount() {
		console.log('quest mount');
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;		
		
		let lQuests = [{id:1, city: 'Смоленск', category:'Категория3', tp:'Групповое', caption: 'Цифровой прорыв', workTime: 'Долго', date: '27.09.2019', dobroMoney: '45', status: 'Свободна'},
					   {id:2, city: 'Казань', category:'Категория1', tp:'Одиночное', caption: 'Убрать мусор', workTime: 'Быстро', date: '30.09.2019', dobroMoney: '45', status: 'Свободна'},
					   {id:3, city: 'Казань', category:'Категория2', tp:'Одиночное', caption: 'Провести мастрер класс',	workTime: 'Долго', date: '01.10.2019', dobroMoney: '30', status: 'Свободна'}];
		
		let fetchedUser = this.props.fetchedUser;

		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
						Экран задания
				</PanelHeader>
				{fetchedUser &&
				<Group title="User Data Fetched with VK Connect">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}
				<Group>
					<div>
						<p>Автор: [Автор]</p>			
						<Checkbox name="cbAllQuests" checked="1">Все задания автора</Checkbox>
						
						<div>	
							<td>
								<div><h4>Город</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.city}</div>
									</div>
								))}								
							</td>	
							<td>
								<div><h4>Категория</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.category}</div>
									</div>
								))}
							</td>	
							<td>
								<div><h4>Тип</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.tp}</div>
									</div>
								))}
							</td>
							<td>								
								<div><h4>Название</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.caption}</div>
									</div>
								))}
							</td>	
							<td>
								<div><h4>Время выполнения</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.workTime}</div>
									</div>
								))}
							</td>	
							<td>
								<div><h4>Актуальность</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.date}</div>
									</div>
								))}
							</td>	
							<td>
								<div><h4>Награда</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.dobroMoney}</div>
									</div>
								))}
							</td>	
							<td>
								<div><h4>Статус</h4></div>								
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<div>{lQuests.status}</div>
									</div>
								))}
							</td>
							<td>
								<div><h4>Команда</h4></div>
								{lQuests.map((lQuests, id) => (
									<div key={id}>
										<Button level="3" onClick={go} data-to="persik">
											Выполнить
										</Button>
									</div>
								))}
							</td>
						</div>
					</div>
				</Group>
			</Panel>
		);
	}
}

export default Quest;
