# vendor/

`gluwa/attestcoin-protocol-examples` (Apache-2.0) 에서 그대로 복사한 공식 베이스 컨트랙트.
**수정 금지.** 업스트림 갱신 시 재복사한다.

- `ASCBase.sol` — 증명 검증 + 리플레이 차단(`processedQueries`) + `_computeQueryId`
- `VerifierInterface.sol` — `0x0FD2` 프리컴파일 인터페이스

원본 커밋: 40541b1 (2026-08-25, "USC -> ASC renames #97")
