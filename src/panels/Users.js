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
import { Link } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';

import star from '../img/star.png';

class Users extends React.Component {
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
		this.state = {
			users: []
		};
	}

	getUsers() {
		fetch("https://lastweb.ru/stubs/hk2/getUsers.php")
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result)
				this.setState({users: result});
			},
			(error) => {
				console.log(error);
			}
		)
	}

	componentDidMount() {
		this.getUsers();
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;
		let fetchedUser = this.props.fetchedUser;
		const { users } = this.state;
		let user_list = [];
		users.forEach((item) => {
			user_list.push(<Div key={item.place}><Link target="_blank" href={"https://vk.com/id" + item.vk_id}>
				{/* {item.place + ". " + item._vk.first_name + " " + item._vk.last_name + " Баланс: " + item.balance + ". Уровень: " + item.level + " " + item._vk.photo } */}
				<Cell
						before={item._vk.photo ? <Avatar src={item._vk.photo}/> : null}
						// description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{item.place + "		" + `${item._vk.first_name} ${item._vk.last_name}` + "		"}
						<img className="star" width="15px" height="15px" src={star}/>{"	" + item.level}
				</Cell>
			</Link></Div>);
		});
		return (
			<Panel id={id}>
				<PanelHeader 
					/*left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}*/>
					Участники
				</PanelHeader>
				<Group title="Рейтинг участников">					
					<Div>{user_list}</Div>
				</Group>
			</Panel>
		);
	}
}

export default Users;
