const db = {
  users: [
    { id: '1', email: 'alex@gmail.com', username: 'Alex', avatarUrl: 'https://gravatar.com/...' },
    { id: '2', email: 'max@gmail.com', username: 'Max', avatarUrl: 'https://gravatar.com/...' }
  ],
  stores: [
    { id: '1', name: 'Alex', image: 'https://gravatar.com/...' },
    { id: '2', name: 'Max', image: 'https://gravatar.com/...' }
  ],
  products: [
    { id: '1', storeId: '1', name: 'caftan', price: '$10', image: 'https://gravatar.com/...', createdAt: Date.now() },
    { id: '2', storeId: '2', name: 'troser', price: '$10', image: 'https://gravatar.com/...', createdAt: Date.now() },
    { id: '3', storeId: '1', name: 't-shirt', price: '$10', image: 'https://gravatar.com/...', createdAt: Date.now() }
  ]
}

export default db
