const accounts = [
    {
        id: 1,
        name: "Phạm Văn Đạt",
        username: "pvdat",
        password: "123456",
        phoneNumber: "0123456789",
        email: "pvdat@gmail.com",
    },
    {
        id: 2,
        name: "Nguyễn Sỹ Quyết",
        username: "ngsquyet",
        password: "123456",
        phoneNumber: "0123456789",
        email: "ngsquyet@gmail.com",
    },
    {
        id: 3,
        name: "Trương Anh Khoa",
        username: "takhoa",
        password: "123456",
        phoneNumber: "0123456789",
        email: "takhoa@gmail.com",
    },
    {
        id: 4,
        name: "Vũ Thành Công",
        username: "vtcong",
        password: "123456",
        phoneNumber: "0123456789",
        email: "vtcong@gmail.com",
    },
    {
        id: 5,
        name: "Trần Lê Viết Khánh",
        username: "tlvkhanh",
        password: "123456",
        phoneNumber: "0123456789",
        email: "tlvkhanh@gmail.com",
    },
    {
        id: 6,
        name: "Hoàng Lê Hải Thanh",
        password: "123456",
        phoneNumber: "0123456789",
        email: "hlhthanh@gmail.com",
    }
];

function getUserById(userId) {
    return accounts.filter(e => e.id === userId);
};

export function addNewuser({ newUserInfo }) {
    const getMaxId = () => {
        if (accounts === []) {
            return 1;
        }
        let maxId = accounts[0].id;
        for (const acc of accounts) {
            if (accounts[i].id > maxId) {
                maxId = accounts[i].id;
            }
        }
        return maxId;
    }

    if (accounts !== []) {
        for (const account of accounts) {
            if (account.username === newUserInfo.username)
                return "Username is already exist!";
            else {
                accounts.push({ ...newUserInfo, id: getMaxId() + 1 });
            }
        }
    }
    else {
        accounts.push({ ...newUserInfo, id: 1 });
    }
};

export function changeUserInfo(userId, { changes }) {
    const currUserInfo = getUserById(userId);
    const newUserInfo = { ...currUserInfo, ...changes };
    accounts.pop(currUserInfo);
    accounts.push(newUserInfo);
}

export function checkAccount(username, password) {
    if (!username || !password) {
        return { err: "Username and password is required!" };
    }

    let account = {};

    for (const item of accounts) {
        if (item.username == username) {
            account = item;
            break;
        }
    }

    if (account != {}) {
        if (account.password == password) {
            return account;
        }
    }

    return { err: "Username or password is incorrect!" };
}

export { accounts };