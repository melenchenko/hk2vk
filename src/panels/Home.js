import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { HeaderButton, Alert } from '@vkontakte/vkui';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Axios from 'axios';

const axios = require('axios');

class Home extends React.Component {
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
		// fetch("https://lastweb.ru/stubs/hk2/getCatalog.php")
		// .then(res => res.json())
		// .then(
		// 	(result) => {
		// 		console.log(result)
		// 		// this.setState({
		// 		// 	isLoaded: true,
		// 		// 	items: result.items
		// 		// });
		// 	},
		// 	// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
		// 	// чтобы не перехватывать исключения из ошибок в самих компонентах.
		// 	(error) => {
		// 		console.log(error)
		// 		// this.setState({
		// 		// 	isLoaded: true,
		// 		// 	error
		// 		// });
		// 	}
		// )
		// $.get( "https://lastweb.ru/stubs/hk2/getCatalog.php", function( data ) {
		// 	console.log(data);
		// }, "json" );
		axios.get('http://lastweb.ru/stubs/hk2/getCatalog.php')
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;
		let fetchedUser = this.props.fetchedUser;
		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
					Catalog
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
				<Group title="Navigation Example">
					<Div>
						<Button size="xl" level="2" onClick={go} data-to="persik">
							Show me the Persik, please
						</Button>
					</Div>
				</Group>
			</Panel>
		);
	}
}

export default Home;
