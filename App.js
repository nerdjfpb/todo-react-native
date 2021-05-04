import React from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import Task from './components/Task'

export default function App() {
	const [task, setTask] = React.useState()
	const [taskItems, setTaskItems] = React.useState([])

	const handleAddTask = () => {
		console.log(task)
		Keyboard.dismiss()
		setTaskItems([...taskItems, task])
		setTask('')
	}

	const completeTasks = (index) => {
		let itemsCopy = [...taskItems]
		itemsCopy.splice(index, 1)
		setTaskItems(itemsCopy)
	}

	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}> Today's tasks</Text>
				<View style={styles.items}>
					{taskItems.map((item, index) => (
						<TouchableOpacity onPress={() => completeTasks(index)}>
							<Task key={index} task={item} />
						</TouchableOpacity>
					))}
				</View>
			</View>

			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.writeTaskWrapper}
			>
				<TextInput
					style={styles.input}
					placeholder='Write a task'
					value={task}
					onChangeText={(text) => setTask(text)}
				/>
				<TouchableOpacity onPress={() => handleAddTask()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8eaed',
	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	items: {
		marginTop: 30,
	},
	writeTaskWrapper: {
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#fff',
		borderRadius: 60,
		borderColor: '#C0C0C0',
		borderWidth: 1,
		width: 250,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	addText: {},
})
