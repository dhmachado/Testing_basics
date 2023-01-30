function parseName({
    firstName,
    lastName = '',
    middleName = '',
    prefix = '',
}) {
    let fullName = prefix ? prefix : '';
    if(lastName) fullName += ` ${lastName},`;
    fullName += ` ${firstName}`
    if(middleName) fullName += ` ${middleName}`;
    return fullName.trim();
}

module.exports = { parseName };
