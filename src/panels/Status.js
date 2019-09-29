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

import star from '../img/star.png';
import balance from '../img/balance.png';
import skill from '../img/skill.png';

class Status extends React.Component {
	constructor(props) {
		super(props);
		this.propTypes = {
			id: PropTypes.string.isRequired,
			go: PropTypes.func.isRequired,
			fetchedUser: PropTypes.shape({
				id: PropTypes.string,
				photo_200: PropTypes.string,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				city: PropTypes.shape({
					title: PropTypes.string,
				}),
			}),
		};
		this.state = {
			user: {}
		};
	}

	getStatus() {
		fetch("https://lastweb.ru/stubs/hk2/getStatus.php?vk_id=" + this.props.fetchedUser.id)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({user: result});
			},
			(error) => {
				console.log(error);
			}
		)
	}

	componentDidMount() {
		this.getStatus();
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;
		let fetchedUser = this.props.fetchedUser;
		const { user } = this.state;
		return (
			<Panel id={id}>
				<PanelHeader 
					/*left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}*/>
					Достижения
				</PanelHeader>
				{fetchedUser &&
				<Group title="Участник">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}
				<Group title="Мои показатели">
					{/* <Div>{this.props.fetchedUser.id}</Div> */}
					<Div><img className="balance" width="15px" height="15px" src={balance}/> {"Баланс: " + user.balance}</Div>
					<Div><img className="star" width="15px" height="15px" src={star}/> {"Уровень: " + user.level}</Div>	
				</Group>
				<Group title="Мои навыки">
					<Div><img className="skill" width="15px" height="15px" src={skill}/> {"приготовление пищи: 11"}</Div>
					<Div><img className="skill" width="15px" height="15px" src={skill}/> {"юридические услуги: 2"}</Div>
					<Div><img className="skill" width="15px" height="15px" src={skill}/> {"клининговые услуги: 5"}</Div>
				</Group>
			</Panel>
		);
	}
}

export default Status;
