## DATABASE
```json
{
    "quests": {
        "private": {
            "$quest_id": "type:QUEST"
        },
        "public": {
            "$quest_id": "type:QUEST"
        },
        "comments": {
            "$comment_id": "type:COMMENT"
        },
    },
    "settings": {
        "shareCode": {
            "groupSize": 4,
            "numberOfGroups": 3
        }
    }
}
```

## type:QUEST
```json
{
    "title": "String, 50",
    "description": "String, 500",
    "shareCode": "String, based on settings.shareCode",
    "owner": "auth.uid",
    "commentsCount": 0
}
```

## type:COMMENT 
```json
{
    "text": "String, 500"
}
```