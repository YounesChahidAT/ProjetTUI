use projettui


INSERT [dbo].[Users]

([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [LastName], [FirstLogin], [LastLogin]) 
VALUES (N'd92e38d6-fbdb-4f3e-bbc5-444c23677960', N'demo', NULL, NULL, NULL, 0, N'$2a$11$MaYl/iAqtrG/yxvP03EWZuHqcddF7Qsj/2LdkbvozhN8O9ivUuyDa', NULL, N'0189d527-c73c-4a48-b718-87fbe2c08572', NULL, 0, 0, NULL, 0, 0, N'Younes', N'Chahid',  0,    CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
GO


select * from [Users] 
--User :demo
--Password 123 
