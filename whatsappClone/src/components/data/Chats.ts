export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'User',
		imageUri: 'https://picsum.photos/id/277/200/300',
	}, {
		id: 'u2',
		name: 'Zeynep Öz',
		imageUri: 'https://picsum.photos/id/386/200/300',
	}],
	messages: [{
		id: 'm1',
		content: 'Selam nasılsın?',
		createdAt: '09:13',
		user: {
			id: 'u1',
			name: 'User',
		},
	}, {
		id: 'm2',
		content: 'İyiyim, teşekkürler.',
		createdAt: '09:15',
		user: {
			id: 'u2',
			name: 'Zeynep Öz',
		},
	}, {
		id: 'm3',
		content: 'Ya sen?',
		createdAt: '09:16',
		user: {
			id: 'u2',
			name: 'Zeynep Öz',
		},
	}, {
		id: 'm4',
		content: 'Ben de iyiyim.',
		createdAt: '13:30',
		user: {
			id: 'u1',
			name: 'User',
		},
	}, {
		id: 'm5',
		content: 'Yarın parti için seni nereden alayım?',
		createdAt: '15:45',
		user: {
			id: 'u1',
			name: 'User',
		},
	}, {
		id: 'm6',
		content: 'Neredeyse unutuyordum partiyi.',
		createdAt: '16:20',
		user: {
			id: 'u2',
			name: 'Zeynep Öz',
		},
	}, {
		id: 'm7',
		content: 'Yarın akşam saat 5 te alışveriş merkezinin hemen önünde bekleyeceğim.',
		createdAt: '16:25',
		user: {
			id: 'u2',
			name: 'Zeynep Öz',
		},
	}]
}