function SideChatList({ friends, conversations }) {
  function selectChat(id) {
    conversations.find(id === participantId.id || id === userId.id)
  }

  return (
    <ul>
      {/* <!-- This first item should always be present --> */}
      <li>
        <button class="chat-button">
          <div>
            <h3>+ Start a new Chat</h3>
          </div>
        </button>
      </li>
      {friends.map(friend => (
        <li>
          <button
            onClick={() => {
              selectChat(friend.id)
            }}
            class="chat-button"
          >
            <img
              class="avatar"
              height="50"
              width="50"
              alt=""
              src={friend.avatar}
            />
            <div>
              <h3>
                {friend.firstName}
                {friend.lastName}
              </h3>
              <p>Last message</p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default SideChatList
