const Message = require('../models/Message');

module.exports = (io) => {
    io.on('connection', (socket) => {
        // console.log('A user connected', socket.id);

        socket.on('join', (userId) => {
            socket.join(userId);
            // console.log(`User ${userId} joined their room`);
        });

        socket.on('send-message', async (data) => {
            const { from, to, message } = data;
            // console.log("Message from:", from, "to:", to, "|", message);

            try {
                const newMessage = new Message({ from, to, message });
                await newMessage.save();

                io.to(to).emit('receive-message', {
                    from,
                    message,
                    timestamp: newMessage.timeStamp
                });

                // io.to(from).emit('receive-message', {
                //     from,
                //     message,
                //     timestamp: newMessage.timeStamp
                // });

            } catch (err) {
                // console.error('Message save error:', err);
                socket.emit('error', { message: 'Failed to send message' });
            }
        });

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });
};
