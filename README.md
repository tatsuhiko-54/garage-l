# README

# Garage L db設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|content|string|null: false|
|image|string|null: false|
### Association
- belongs_to :user